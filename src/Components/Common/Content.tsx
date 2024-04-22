import {
  Project,
  PROJECTS,
  TEXTS,
  WORK_EXPERIENCES,
  WorkExperience,
} from '@/Texts.ts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/Components/ui/card.tsx';

function Experience(exp: WorkExperience) {
  return (
    <Card
      onClick={() => {}}
      className="p-4 flex flex-col justify-between cursor-pointer"
    >
      <CardHeader>
        <CardTitle>{exp.place}</CardTitle>
        <CardDescription className="text-xl">{exp.title}</CardDescription>
      </CardHeader>
      <CardContent className="font-normal text-lg">
        {exp.description}
      </CardContent>
      <CardFooter>
        <p className="font-medium text-lg">
          {exp.start} - {exp.end}
        </p>
      </CardFooter>
    </Card>
  );
}

function ProjectComponent(prj: Project) {
  return (
    <Card
      onClick={() => {}}
      className="p-4 flex flex-col justify-start cursor-pointer"
    >
      <CardHeader className="">
        <CardTitle>{prj.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-normal text-lg space-y-4">
        <img src={prj.image} alt={prj.name} />
        <p>{prj.description}</p>
      </CardContent>
    </Card>
  );
}

export default function Content() {
  return (
    <main className="w-full pt-20">
      <div className="flex flex-col md:flex-row md:justify-center w-full md:px-16 md:space-x-14 space-y-12 md:space-y-0">
        <div className="px-16 md:px-0 flex justify-center">
          <img
            className="max-w-72 lg:max-w-96 rounded-full"
            src={TEXTS.profile.profilePic}
            alt={TEXTS.profile.name}
          />
        </div>
        <div className="h-full space-y-8 px-8 lg:max-w-[720px]">
          <h1 className="text-4xl font-extrabold">
            {TEXTS.profile.introduction}
          </h1>
          <p className="text-2xl">{TEXTS.profile.aboutMe}</p>
        </div>
      </div>
      <div className="flex flex-col px-8 md:flex-row md:justify-center w-full md:px-16 md:space-x-14 space-y-12 md:space-y-0 pt-14">
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold">
            {TEXTS.general.workExperience}
          </h2>
          <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {WORK_EXPERIENCES.map(item => {
              return (
                <Experience
                  key={item.title + item.start + item.end}
                  {...item}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-8 md:flex-row md:justify-center w-full md:px-16 md:space-x-14 space-y-12 md:space-y-0 pt-14">
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold">{TEXTS.general.projects}</h2>
          <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map(item => {
              return <ProjectComponent key={item.name} {...item} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
