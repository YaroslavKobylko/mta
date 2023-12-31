import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Чекаємо дві секунди перед перенаправленням на сторінку "Home"
    const timeout = setTimeout(() => {
      navigate('/home');
    }, 2000);

    // Під час видалення компонента зупиняємо таймаут, щоб уникнути проблем
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
<div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
    </div>
  );
};

export default Loader;