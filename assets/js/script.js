const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

try {
  const slider = document.querySelector("#slider");
  function moveNext() {
    slider.scrollLeft += slider.offsetWidth;
  }
  function movePrev() {
    slider.scrollLeft -= slider.offsetWidth;
  }
} catch (err) {
  console.log(err);
}

try {
  function showContainer(containerId) {
    const containers = document.querySelectorAll(".content-container");
    containers.forEach((container) => {
      container.classList.remove("flex");
    });

    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach((button) => {
      button.classList.remove("activeBtn");
    });

    const selectedContainer = document.getElementById(containerId);
    selectedContainer.classList.add("flex");

    const clickedButton = document.querySelector(
      `button[onclick="showContainer('${containerId}')"]`
    );
    clickedButton.classList.add("activeBtn");
  }

  window.onload = () => {
    showContainer("static");
  };
} catch (err) {
  console.log(err);
}

try {
  function toggleFaq(faqNumber) {
    const faqContent = document.getElementById(`content-${faqNumber}`);
    const faqIcon = document.getElementById(`icon-${faqNumber}`);
    const faqContainer = document.getElementById(`faq-${faqNumber}`);

    faqContent.classList.toggle("hidden");

    faqIcon.classList.toggle("rotate-0");
    faqIcon.classList.toggle("rotate-45");

    if (faqContent.classList.contains("hidden")) {
      faqContainer.classList.remove("bg-[#f0f3ff]");
      faqContainer.classList.add("bg-white");
    } else {
      faqContainer.classList.remove("bg-white");
      faqContainer.classList.add("bg-[#f0f3ff]");
    }
  }
} catch (err) {}
