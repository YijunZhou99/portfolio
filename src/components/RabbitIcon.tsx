import React from 'react';
import LOGO from "../assets/logo.png";

export const RabbitIcon = ({ className }: { className?: string }) => (
  <img src={LOGO} alt="" style = {{width: "2em", height: "2em", verticalAlign: "middle", marginRight: "0.5em"}}/>
);
