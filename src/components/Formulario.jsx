import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = (props) => {
	const OPCIONES = [
		{ value: 'general', label: 'General' },
		{ value: 'business', label: 'Negocios' },
		{ value: 'entertainment', label: 'Entretenimiento' },
		{ value: 'health', label: 'Salud' },
		{ value: 'science', label: 'Ciencia' },
		{ value: 'sports', label: 'Deportes' },
		{ value: 'technology', label: 'Tecnología' },
	];

	// utilizar custom hook
	const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

	return (
		<div className={`${styles.buscador} row`}>
			<div className="col s12 m8 offset-m2">
				<form>
					<h3 className={styles.heading}>Encuentra noticias por categoria</h3>
					<SelectNoticias />
					<div className="input-field col s12">
						<input
							type="submit"
							className={`${styles['btn-block']} btn-large pink`}
							value="Buscar"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

Formulario.propTypes = {};

export default Formulario;
