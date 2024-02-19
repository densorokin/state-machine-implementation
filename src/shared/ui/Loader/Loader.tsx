import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
 <div className="loader">
      <span className="element animate__animated animate__bounce animate__infinite"></span>
    </div>
  );
};
