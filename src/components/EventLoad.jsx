import { Link } from 'react-router-dom';

function EventLoad() {
	return (
		<>
			<div className="events">
				<div className="events_before">
					<div className="e_title">Предшествующие:</div>
					<div className="e_box">
						<Link to="/history/events/43">
							<div className="eb_item">
								Утверждение автокефальности КПЦ императором Зеноном
							</div>
						</Link>
					</div>
				</div>

				<div className="events_now">
					<div className="e_title">Настоящие:</div>
					<div className="e_box">
						<Link to="/history/events/44">
							<div className="en_item">
								Первое арабское вторжение на Кипр (648)
							</div>
						</Link>
					</div>
				</div>

				<div className="events_after">
					<div className="e_title">Последующие:</div>
					<div className="e_box">
						<Link to="/history/events/45">
							<div className="ea_item">
								Дело Филентолоса, сына Олимпия
							</div>
						</Link>
					</div>
				</div>

			</div>
		</>
	);
}

export default EventLoad;