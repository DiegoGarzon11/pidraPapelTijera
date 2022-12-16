window.addEventListener('load', () => {
	const nombreUser = prompt('ingrese su nombre');
	const confirmar = document.querySelector('.confirmar');
	const resultado = document.querySelector('.resultado');
	const resultadoMaquina = document.querySelectorAll('.resultadoMaquina');
	const jugador = document.querySelector('.jugador');
	const resultadoUser = document.querySelector('.resultadoUser');
	const piedra = document.getElementById('piedra');
	const papel = document.getElementById('papel');
	const tijera = document.getElementById('tijera');
	let numeroEmpate = document.querySelector('.numeroEmpate');
	let numeroDerrota = document.querySelector('.numeroDerrota');
	let numeroVictoria = document.querySelector('.numeroVictoria');
	const valorResultado = document.querySelector('.valorResultado');
	const footer = document.querySelector('.footer');
	const container = document.querySelector('.container');
	const again = document.querySelector('.again');
	confirmar.addEventListener('click', () => {
		const container = document.querySelector('.container');
		container.style.display = 'flex';
		confirmar.style.display = 'none';
	});

	//completo el juego del computador
	const opciones = ['🪨', '🧻', '✂️'];
	let numeroAleta = Math.floor(Math.random() * 3);
	function obtenerValorPc() {
		return opciones[numeroAleta];
	}

	//juego usuario
	piedra.addEventListener('click', () => {
		resultadoMaquina.forEach((el) => (el.style.display = 'block'));
		resultado.innerText = obtenerValorPc();
		if (numeroDerrota.textContent === '5') {
			valorResultado.innerText = ' Computadora';
			numeroDerrota = '';
			numeroVictoria = '';
			numeroEmpate = '';

			footer.style.display = 'flex';
			setTimeout(() => {
				container.style.display = 'none';
			}, 1000);
		} else if (numeroVictoria.textContent === '5') {
			valorResultado.innerText = nombreUser ? (jugador.innerText = nombreUser) : (jugador.innerText = 'Jugador');
			numeroDerrota = '';
			numeroVictoria = '';
			numeroEmpate = '';
			footer.style.display = 'flex';
			setTimeout(() => {
				container.style.display = 'none';
			}, 1000);
		}
		nombreUser ? (jugador.innerText = nombreUser) : (jugador.innerText = 'Jugador');
		resultadoUser.innerText = '🪨';
		if (obtenerValorPc() === '🪨') {
			empate++;
			numeroEmpate.innerText = `${empate}`;
			numeroAleta = Math.floor(Math.random() * 3);
			return;
		} else if (obtenerValorPc() === '🧻') {
			derrota++;
			numeroDerrota.innerText = `${derrota}`;
			numeroAleta = Math.floor(Math.random() * 3);
			return;
		} else if (obtenerValorPc() === '✂️') {
			victoria++;
			numeroVictoria.innerText = `${victoria}`;
			numeroAleta = Math.floor(Math.random() * 3);
			return;
		}
	});
	papel.addEventListener('click', () => {
		resultadoMaquina.forEach((el) => (el.style.display = 'block'));
		nombreUser ? (jugador.innerText = nombreUser) : (jugador.innerText = 'Jugador');
		if (numeroDerrota.textContent === '5') {
			valorResultado.innerText = ' Computadora';
			numeroDerrota = '';
			numeroVictoria = '';
			numeroEmpate = '';
			footer.style.display = 'flex';
			setTimeout(() => {
				container.style.display = 'none';
			}, 1000);
		} else if (numeroVictoria.textContent === '5') {
			valorResultado.innerText = nombreUser ? (jugador.innerText = nombreUser) : (jugador.innerText = 'Jugador');
			numeroDerrota = '';
			numeroVictoria = '';
			numeroEmpate = '';
			footer.style.display = 'flex';
			setTimeout(() => {
				container.style.display = 'none';
			}, 1000);
		}
		resultadoUser.innerText = '🧻';
		resultado.innerText = obtenerValorPc();
		if (obtenerValorPc() === '🧻') {
			empate++;
			numeroEmpate.innerText = `${empate}`;
			numeroAleta = Math.floor(Math.random() * 3);
			return;
		} else if (obtenerValorPc() === '🪨') {
			victoria++;
			numeroVictoria.innerText = `${victoria}`;
			numeroAleta = Math.floor(Math.random() * 3);
			return;
		} else if (obtenerValorPc() === '✂️') {
			derrota++;
			numeroDerrota.innerText = `${derrota}`;
			numeroAleta = Math.floor(Math.random() * 3);
			return;
		}
	});
	tijera.addEventListener('click', () => {
		resultadoMaquina.forEach((el) => (el.style.display = 'block'));
		nombreUser ? (jugador.innerText = nombreUser) : (jugador.innerText = 'Jugador');
		resultadoUser.innerText = '✂️';
		resultado.innerText = obtenerValorPc();
		if (numeroDerrota.textContent === '5') {
			valorResultado.innerText = ' Computadora';
			numeroDerrota = '';
			numeroVictoria = '';
			numeroEmpate = '';
			footer.style.display = 'flex';
			setTimeout(() => {
				container.style.display = 'none';
			}, 1000);
		} else if (numeroVictoria.textContent === '5') {
			valorResultado.innerText = nombreUser ? (jugador.innerText = nombreUser) : (jugador.innerText = 'Jugador');
			numeroDerrota = '';
			numeroVictoria = '';
			numeroEmpate = '';
			footer.style.display = 'flex';
			setTimeout(() => {
				container.style.display = 'none';
			}, 1000);
		}

		if (obtenerValorPc() === '✂️') {
			empate++;
			numeroEmpate.innerText = `${empate}`;
			numeroAleta = Math.floor(Math.random() * 3);
			return empate;
		} else if (obtenerValorPc() === '🧻') {
			victoria++;
			numeroVictoria.innerText = `${victoria}`;
			numeroAleta = Math.floor(Math.random() * 3);
			return victoria;
		} else if (obtenerValorPc() === '🪨') {
			derrota++;
			numeroDerrota.innerText = `${derrota}`;
			numeroAleta = Math.floor(Math.random() * 3);
			return derrota;
		}
	});

	let empate = 0;
	let derrota = 0;
	let victoria = 0;
	again.addEventListener('click', () => {
		location.reload();
	});
});
