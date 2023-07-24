
import { AppProvider } from './context/AppProvider';
import { AppRouter } from './router/AppRouter';

function AvatarStudio() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default AvatarStudio;
