// import { classNames } from 'shared/lib/classNames';
// import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={classNames(cls.container, {}, [className])}>
      <span className={cls.content}>Welcome to a state machine</span>
      <AppLink to="/state-machine">Demo</AppLink>
    </div>
  );
};

export default MainPage;
