create table pizza_order_line (
	id integer primary key AUTOINCREMENT,
	pizza_order_id int,
	pizza_id int,
	qty int	
);