import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

export type Skill = {
    label: string,
    percentage: number,
};

const SkillItem = ({ label, percentage }: Skill) => {
    const normalizedPercentage = Math.min(100, Math.max(0, percentage));

    return (
        <Box sx={{ display: "flex", width: "100%", padding: 1 }}>
            <Typography variant="body1" sx={{ width: "30%" }}>
                {label}
            </Typography>
            <LinearProgress 
                variant="determinate" 
                value={normalizedPercentage} 
                color="secondary"
                sx={{ width: "65%", height: "auto", borderRadius: 2 }}
            />            
        </Box>
    );
};

export default SkillItem;
