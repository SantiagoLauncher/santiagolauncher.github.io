const btnDownload = document.querySelector('.btn-pixel:nth-of-type(1)');
const btnTrailer = document.querySelector('.btn-pixel:nth-of-type(2)');

const btnWin = document.querySelectorAll('.btn-pixel')[2];
const btnMac = document.querySelectorAll('.btn-pixel')[3];
const btnLinux = document.querySelectorAll('.btn-pixel')[4];

btnDownload.addEventListener('click', () => {
  window.location.href = '#get';
});

btnTrailer.addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=8b1g0d4k2aE', '_blank');
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