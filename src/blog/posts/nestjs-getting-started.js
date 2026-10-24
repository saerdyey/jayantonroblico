import React from "react";
import { CodeBlock, Callout } from "../../components/BlogPost/Prose";

const install = `npm i -g @nestjs/cli
nest new tasks-api
cd tasks-api
npm run start:dev`;

const generate = `nest g module tasks
nest g controller tasks
nest g service tasks`;

const service = `import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private nextId = 1;

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException(\`Task #\${id} not found\`);
    }
    return task;
  }

  create(dto: CreateTaskDto): Task {
    const task = { id: this.nextId++, title: dto.title, done: false };
    this.tasks.push(task);
    return task;
  }
}`;

const controller = `import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }
}`;

const tasksModule = `import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}`;

const dto = `import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string;
}`;

const main = `import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();`;

const curl = `# create a task
curl -X POST http://localhost:3000/tasks \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Learn NestJS"}'
# -> {"id":1,"title":"Learn NestJS","done":false}

# list tasks
curl http://localhost:3000/tasks

# invalid body -> 400 Bad Request
curl -X POST http://localhost:3000/tasks \\
  -H "Content-Type: application/json" \\
  -d '{}'`;

const NestjsGettingStarted = () => (
  <>
    <p>
      Express is great until a project grows. Routes, business logic, and
      database calls start living in the same file, and every new developer
      organizes things a little differently. NestJS fixes that by giving your
      Node.js backend a clear structure from day one.
    </p>
    <p>
      In this post we'll build a tiny tasks API to see the core ideas:{" "}
      <strong>modules</strong>, <strong>controllers</strong>,{" "}
      <strong>providers</strong>, and <strong>validation</strong>.
    </p>

    <h2>What is NestJS?</h2>
    <p>
      NestJS is a TypeScript framework for building server-side applications.
      Under the hood it runs on Express by default (or Fastify if you prefer),
      so you keep the whole Node ecosystem. On top of that it adds an
      opinionated architecture inspired by Angular: code is grouped into
      modules, and classes get their dependencies through{" "}
      <strong>dependency injection</strong> instead of importing and wiring
      everything by hand.
    </p>

    <h2>1. Create a project</h2>
    <p>Install the CLI, scaffold a project, and start it in watch mode:</p>
    <CodeBlock title="terminal" code={install} />
    <p>
      Open <code>http://localhost:3000</code> and you should see{" "}
      <code>Hello World!</code>. The interesting files are in{" "}
      <code>src/</code>: <code>main.ts</code> boots the app and{" "}
      <code>app.module.ts</code> is the root module everything else plugs into.
    </p>

    <h2>2. The three building blocks</h2>
    <ul>
      <li>
        <strong>Modules</strong> group related code (one per feature, like{" "}
        <code>tasks</code> or <code>users</code>).
      </li>
      <li>
        <strong>Controllers</strong> handle HTTP: they map routes to methods
        and return responses.
      </li>
      <li>
        <strong>Providers</strong> (usually services) hold the business logic.
        Nest creates them and injects them wherever they're needed.
      </li>
    </ul>
    <p>
      The CLI generates all three and registers them for you, so there's no
      manual wiring:
    </p>
    <CodeBlock title="terminal" code={generate} />

    <h2>3. Write the service</h2>
    <p>
      The service owns the data and the rules. We'll keep tasks in memory to
      stay focused on Nest itself; swapping in a real database later only
      changes this file.
    </p>
    <CodeBlock title="src/tasks/tasks.service.ts" code={service} />
    <p>
      Notice <code>NotFoundException</code>: throwing one of Nest's built-in
      HTTP exceptions automatically becomes a proper <code>404</code>{" "}
      response. No manual <code>res.status(404)</code> needed.
    </p>

    <h2>4. Write the controller</h2>
    <CodeBlock title="src/tasks/tasks.controller.ts" code={controller} />
    <p>A few things are happening here:</p>
    <ul>
      <li>
        <code>@Controller('tasks')</code> prefixes every route with{" "}
        <code>/tasks</code>.
      </li>
      <li>
        The constructor asks for a <code>TasksService</code> and Nest's
        dependency injection hands it one. That also makes testing easy, since
        you can inject a fake service instead.
      </li>
      <li>
        <code>ParseIntPipe</code> converts the <code>:id</code> URL param to a
        number and returns a <code>400</code> if it isn't one.
      </li>
    </ul>
    <p>
      The generated module already ties the two together:
    </p>
    <CodeBlock title="src/tasks/tasks.module.ts" code={tasksModule} />

    <h2>5. Validate the request body</h2>
    <p>
      Never trust incoming data. Install the validation packages, then
      describe the expected body with a DTO (data transfer object):
    </p>
    <CodeBlock title="terminal" code="npm i class-validator class-transformer" />
    <CodeBlock title="src/tasks/dto/create-task.dto.ts" code={dto} />
    <p>Then turn validation on for the whole app in <code>main.ts</code>:</p>
    <CodeBlock title="src/main.ts" code={main} />
    <Callout>
      <code>whitelist: true</code> strips any properties that aren't in the
      DTO, so clients can't sneak extra fields into your data.
    </Callout>

    <h2>6. Try it out</h2>
    <CodeBlock title="terminal" code={curl} />
    <p>
      The last request fails with a <code>400</code> and a message explaining
      that <code>title</code> must not be empty, without us writing a single
      if-statement for it.
    </p>

    <h2>Where to go next</h2>
    <ul>
      <li>
        Connect a real database with <strong>TypeORM</strong> or{" "}
        <strong>Prisma</strong> and replace the in-memory array.
      </li>
      <li>
        Load environment variables with <code>@nestjs/config</code>.
      </li>
      <li>
        Protect routes with <strong>guards</strong> (for example, JWT
        authentication).
      </li>
      <li>
        Write unit tests: the generated <code>*.spec.ts</code> files are
        already set up with Jest.
      </li>
    </ul>
    <p>
      That's the core of NestJS: small, focused classes that Nest wires
      together for you. Once the module / controller / service pattern clicks,
      every new feature follows the same shape, and that consistency is what
      keeps a growing backend maintainable.
    </p>
  </>
);

export default NestjsGettingStarted;
