module.exports = {
  all: async () => {
    const moduleConfig = {
      start: {
        path: '/',
        label: 'Start',
        tooltip: 'Start',
        isMenuHidden: false,
      },
      news: {
        path: '/news',
        label: 'News',
        tooltip: 'Gaming News',
        isMenuHidden: false,
      },
      reviews: {
        path: '/reviews',
        label: 'Reviews',
        tooltip: 'Game Reviews',
        isMenuHidden: false,
      },
      games: {
        className: 'menu-games',
        path: '/games',
        label: 'Games',
        tooltip: 'Games',
        isMenuHidden: true,
      },
      register: {
        className: 'menu-register',
        path: '/auth/register',
        label: 'Register For Free',
        tooltip: 'Register For Free',
        isMenuHidden: true,
      },
      login: {
        className: 'menu-login',
        path: '/auth/login',
        label: 'Login',
        tooltip: 'Login',
        isMenuHidden: true,
      },
      account: {
        className: 'menu-account',
        path: '/account',
        label: 'Account',
        tooltip: 'Account',
        isMenuHidden: true,
      }
    }

    return JSON.stringify(moduleConfig);
  }
};
