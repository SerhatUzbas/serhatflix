import { ReactComponent as Play } from "../img/SVG/controller-play.svg";
import { ReactComponent as Info } from "../img/SVG/info.svg";
import walp from "../img/green_code-wallpaper-1280x720.jpg";

import "../Styles/Content.css";
const Content = () => {
  return (
    <section className='content'>
      <img src={walp} alt='content' className='content__back' />
      <h1 className='content__header'>the matrix</h1>
      <h3 className='content__para'>
        What is the matrix? That question leads computer hacker Neo down a
        rabbit hole -- and to the mind blowing truth about the world as he knows
        it.
      </h3>
      <div className='content__btn-1'>
        <svg className='icon-1'>
          <Play />
        </svg>
        <span className='text-1'>Play</span>
      </div>
      <div className='content__btn-2'>
        <svg className='icon-2'>
          <Info />
        </svg>
        <span className='text-2'>More Info</span>
      </div>
    </section>
  );
};

export default Content;
