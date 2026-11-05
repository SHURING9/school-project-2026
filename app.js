
const programGroups = [
  {
    title: "1일차",
    theme: "📚 책에서 발견하는 나의 진로",
    activities: [
      "진로계열별 독서토론",
      "진로 인포그래픽 · 미니북",
      "진로 북큐레이션",
    ]
  },
  {
    title: "2일차",
    theme: "🌸 함께 만드는 즐거운 하루",
    activities: [
      "향기 사쉐 만들기",
      "뉴스포츠 협력 챌린지",
    ]
  },
  {
    title: "3일차",
    theme: "🎵 우리의 작품을 만나는 시간",
    activities: [
      "칼림바 만들기",
      "전시 · 갤러리워크"
    ]
  }
];


function renderPrograms() {
  const container = document.getElementById("program-list");

  if (!container) return;

  container.innerHTML = programGroups.map((day, dayIndex) => `
    <article class="program-day">
      <h3 class="day-title">${day.title}</h3>

      <p class="day-description">
        <strong>${day.theme}</strong>
      </p>

      <div class="program-names">
        ${day.activities.map(activity => {
          if (
            dayIndex === 2 &&
            activity.includes("칼림바 만들기")
          ) {
            return `
              <button
                type="button"
                class="kalimba-toggle"
                aria-expanded="false"
                aria-controls="kalimba-guide"
                onclick="toggleKalimbaGuide()"
              >
                🎶 ${activity} <span>＋</span>
              </button>
            `;
          }

          return `<span>${activity}</span>`;
        }).join(" · ")}
      </div>

      ${dayIndex === 2 ? `
        <div id="kalimba-guide" class="kalimba-guide" hidden>
          <h4>🎵 합주 참고 영상</h4>

          <h5>1. Somewhere Over the Rainbow</h5>
          <div class="kalimba-video">
            <iframe
              src="https://www.youtube.com/embed/X-ruR6ISnhY"
              title="Somewhere Over the Rainbow 칼림바 연주"
              allowfullscreen
            ></iframe>
          </div>

          <h5>2. 마법 소녀 배달부 키키</h5>
          <div class="kalimba-video">
            <iframe
              src="https://www.youtube.com/embed/LSAk51T7PrM"
              title="Kiki's Delivery Service 칼림바 연주"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ` : ""}
    </article>
  `).join("");
}



function toggleKalimbaGuide() {
  const guide = document.getElementById("kalimba-guide");
  const button = document.querySelector(".kalimba-toggle");

  if (!guide || !button) return;

  const isOpening = guide.hidden;

  guide.hidden = !isOpening;
  button.setAttribute("aria-expanded", String(isOpening));
  button.querySelector("span").textContent =
    isOpening ? "－" : "＋";
}

const resultItems = [
  {
    icon: "📖",
    title: "8페이지 미니북",
    description: "책 소개부터 핵심 문장, 진로 연결, 나의 질문까지 담은 작은 책"
  },
  {
    icon: "🎨",
    title: "진로 인포그래픽",
    description: "책 속 진로 정보와 관련 직업·필요 역량·관련 학과를 표현한 작품"
  },
  {
    icon: "📚",
    title: "북큐레이션 카드",
    description: "옛 도서 대출 카드에서 영감을 얻은 모둠별 도서 추천 기록"
  },
  {
    icon: "🌸",
    title: "향기 사쉐",
    description: "한 해의 감정과 기억을 향기로 표현한 나만의 작품"
  },
  {
    icon: "🎵",
    title: "미니 칼림바",
    description: "8음 열쇠고리 칼림바를 직접 조립하고 연주한 음악 작품"
  },

];


function renderResults() {
  const container = document.getElementById("result-list");

  if (!container) return;

  const programGroups = [
    {
      title: "📚 1일차 · 책에서 발견하는 나의 진로",
      activities: [
        "📖 진로계열별 독서토론",
        "🎨 진로 인포그래픽 · 미니북",
        "📚 진로 북큐레이션",
      ]
    },
    {
      title: "🌸 2일차 · 함께 만드는 즐거운 하루",
      activities: [
        "🌷 향기 사쉐 만들기",
        "🏃 뉴스포츠 협력 챌린지",
      ]
    },
    {
      title: "🎵 3일차 · 우리의 작품을 만나는 시간",
      activities: [
        "🎶 칼림바 만들기",
        "🖼️ 전시 · 갤러리워크"
      ]
    }
  ];

  container.innerHTML = programGroups.map(day => `
    <article class="result-card">
      <h3>${day.title}</h3>
      <ul class="activity-list">
        ${day.activities.map(activity => `
          <li>${activity}</li>
        `).join("")}
      </ul>
    </article>
  `).join("");
}


function renderGallery() {
  const container = document.getElementById("gallery-list");

  if (!container) return;

  container.innerHTML = `
    <div class="gallery-empty">
      <span>📷</span>
      <h3>우리의 활동을 기록해 주세요!</h3>
      <p>활동 사진을 하나씩 모아 이곳에 전시할 예정입니다.</p>
    </div>
  `;
}

function renderReflection() {
  const container = document.getElementById("reflection-list");

  if (!container) return;

  container.innerHTML = `
    <div class="reflection-message">
      <span>🌱</span>
      <h3>나의 작은 경험이 새로운 꿈이 되기를</h3>
      <p>
        책을 통해 세상을 만나고,<br>
        친구들과 함께 생각을 나누며,<br>
        나만의 가능성을 발견하는 시간.
      </p>
      <p class="reflection-bottom">
        우리의 이야기는 계속됩니다. 💜
      </p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderPrograms();
  renderResults();
  renderGallery();
  renderReflection();
});
