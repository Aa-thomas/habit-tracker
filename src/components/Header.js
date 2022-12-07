import { Link } from 'react-router-dom';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Stats from './Stats';

const Header = ({ title, habitList }) => {
	return (
		<header>
			<Stats habitList={habitList} />
			<h1>{title}</h1>
			<div className="link-icons">
				<Link to="/habits">
					<ListAltIcon />
				</Link>
				<Link to="/barchart">
					<BarChartIcon />
				</Link>
				<Link to="/piechart">
					<PieChartIcon />
				</Link>
				<Link to="/linechart">
					<ShowChartIcon />
				</Link>
			</div>
		</header>
	);
};

export default Header;
