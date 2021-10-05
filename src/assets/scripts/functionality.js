export const displayEnvMode = () => {

  switch (process.env.NODE_ENV) {

    case 'development':
      console.log('Development Mode');
      break;

    case 'production':
      console.log('Production Mode');
      break;

    default:
      console.log('None Mode');
      break;

  }

}
