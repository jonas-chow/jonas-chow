import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

type Props = {
    iconPath: string;
    header: string;
    description: string[];
}

const EducationItem = ({ iconPath, header, description }: Props) => {
    return (
        <Box sx={{ padding: "60px", display: "flex" }} id="about" >
            <Box>
                <Avatar src={iconPath} />
            </Box>
            <Box>
                <Typography variant="body1">
                    {header}
                </Typography>
                <Typography variant="body1">
                    <ul>
                        {description.map((desc, idx) => (
                            <li key={`desc${idx}`}>{desc}</li>
                        ))}
                    </ul>
                </Typography>
            </Box>
        </Box>
    );
};

export default EducationItem;
