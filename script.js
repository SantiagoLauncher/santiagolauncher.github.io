const buttons = document.querySelectorAll('.btn-pixel');

const btnDownload = buttons[0];
const btnWin = buttons[1];
const btnMac = buttons[2];
const btnLinux = buttons[3];

btnDownload.addEventListener('click', () => {
  window.location.href = '#get';
});

btnWin.addEventListener('click', () => {
  window.open('https://github.com/SantiagoLauncher/SLauncher/releases/download/1.0/SLauncher1.0.zip', '_blank');
});

btnMac.addEventListener('click', () => {
    if (confirm('MacOS version is under testing. You can either download this one or use the Source Code. Press OK to download the MacOS version.')) {
        window.open('https://github.com/SantiagoLauncher/SLauncher/releases/download/1.0/SLauncher1.0-MacOS.zip', '_blank');
    } else {
      if (confirm("You chose not to download the MacOS version. Do you want to open the Source Code page?")) {
        window.open("https://github.com/SantiagoLauncher/SLauncher", "_blank");
      } else {
        alert("You linkin't ;)");
      }
    }
});

btnLinux.addEventListener('click', () => {
    if (confirm('LinuxOS version is under testing. You can either download this one or use the Source Code. Press OK to download the LinuxOS version.')) {
        window.open('https://github.com/SantiagoLauncher/SLauncher/releases/download/1.0/SLauncher1.0-LinuxOS.zip', '_blank');
    } else {
      if (confirm("You chose not to download the LinuxOS version. Do you want to open the Source Code page?")) {
        window.open("https://github.com/SantiagoLauncher/SLauncher", "_blank");
      } else {
        alert("You linkin't ;)");
      }
    }
});

(() => {
  const body = document.body;
  const html = document.documentElement;

  let currentScroll = window.scrollY || window.pageYOffset;
  let targetScroll = currentScroll;
  let isScrolling = false;

  const ease = 0.1;

  function smoothScroll() {
    currentScroll += (targetScroll - currentScroll) * ease;
    window.scrollTo(0, currentScroll);

    if (Math.abs(targetScroll - currentScroll) > 0.5) {
      requestAnimationFrame(smoothScroll);
    } else {
      isScrolling = false;
    }
  }

  window.addEventListener("wheel", (e) => {
    e.preventDefault();
    targetScroll += e.deltaY;
    targetScroll = Math.max(0, Math.min(targetScroll, html.scrollHeight - window.innerHeight));

    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(smoothScroll);
    }
  }, { passive: false });

  window.addEventListener("keydown", (e) => {
    let delta = 0;
    switch(e.key) {
      case "ArrowDown": delta = 40; break;
      case "ArrowUp": delta = -40; break;
      case "PageDown": delta = window.innerHeight; break;
      case "PageUp": delta = -window.innerHeight; break;
      case "Home": delta = -targetScroll; break;
      case "End": delta = html.scrollHeight; break;
      default: return;
    }
    e.preventDefault();
    targetScroll += delta;
    targetScroll = Math.max(0, Math.min(targetScroll, html.scrollHeight - window.innerHeight));

    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(smoothScroll);
    }
  });
})();

