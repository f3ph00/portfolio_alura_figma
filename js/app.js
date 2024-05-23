const options = {
    bottom: '64px',
    right: 'unset',
    left: '32px',
    time: '0.5s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: false,
    label: '🌓', // Custom label for the dark mode button
    autoMatchOsTheme: true,
};
const darkmode = new Darkmode(options);
darkmode.showWidget();