const INTRODUCTION = [
  "안녕하세요, 한국에서 소프트웨어 개발자로 일하고 있는 오세명입니다.",
  "2024년 6월 어느날, 생각과 경험의 순간을 기록해야겠다고 생각했어요. 마음속 등불처럼 먼 나중에 다시 비추고 싶은 것들을 글로 쓰고있어요.",
  "이곳이 흐릿한 기억을 꺼내주는 곳이든 긴장된 하루를 풀어주는 곳이든 따뜻한 감정과 함께 기억되기를 바라요.",
];

export default function Home() {
  return (
    <div className="h-[calc(100dvh-84px)] flex flex-col items-center justify-center">
      {INTRODUCTION.map((paragraph) => (
        <p
          key={paragraph}
          className="text-sage-light-12 dark:text-sage-dark-12 text-body-2-regular my-[20px] text-left w-full"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
