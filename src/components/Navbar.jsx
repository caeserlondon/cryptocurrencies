import React from "react";
import { Button, Menu, Typographu, Avatar, Typography } from "antd";
import { link } from "react-router-dom";
import {
	HomeOutlined,
	MoneyOutLined,
	BulbOutLined,
	FundOutLined,
	MenuOutLined,
} from "@ant-design/icons";

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar />
				<Typography.Title level={2} className="logo">
					<link to="/">Cryptocurrencies</link>
				</Typography.Title>
				{/* <Button className="menu-control-container"></Button> */}
			</div>
		</div>
	);
};

export default Navbar;
