import styles from './KsefLogin.module.scss';
import AuthorizationByCertificate from '../AuthorizationByCertificate/AuthorizationByCertificate';


const KsefLogin = () => (
	<div className={styles.wrapper}>
		<AuthorizationByCertificate />
	</div>
);

export default KsefLogin;
