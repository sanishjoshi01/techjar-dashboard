import classNames from "classnames";
import { twMerge } from 'tailwind-merge'

const Loading = ({className, classNameSpinner}) => {
    const loadingContainerClassNames = twMerge(
      classNames(
        'flex items-center justify-center bg-white bg-opacity-80 z-50 h-full', 
        className
    ));
    const loadingSpinnerClassNames = twMerge(classNames(
      'loading-spinner border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full w-32 h-32 animate-spin', 
      classNameSpinner
    ));

  return (
    <div className={loadingContainerClassNames}>
      <div className={loadingSpinnerClassNames}></div>
    </div>
  );  
};

export default Loading;