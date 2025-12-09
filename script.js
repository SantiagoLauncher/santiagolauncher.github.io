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


