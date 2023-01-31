import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import React from "react";

export type ThumbnailProps = {
    thumbnailPath: string,
    link?: string,
    githubLink?: string,
    title: string,
    description: string,
    redirect?: string,
}

const ThumbnailItem = ({ thumbnailPath, link, githubLink, title, description, redirect }: ThumbnailProps) => {
    return (
        <Box sx={{ width: 320 }}>
            <Box>
                <a href={redirect}>
                    <img src={thumbnailPath} height={200} width={320} style={{ objectFit: "cover" }} alt={title} />
                </a>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h3" sx={{ width: 250 }}>
                    {title}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {link && (
                        <IconButton href={link} target="_blank" rel="noreferrer noopener">
                            <LinkIcon />
                        </IconButton>
                    )}
                    
                    {githubLink && (
                        <IconButton href={githubLink} target="_blank" rel="noreferrer noopener">
                            <GitHubIcon />
                        </IconButton>
                    )}
                </Box>
            </Box>
            <Typography>
                {description}
            </Typography>
        </Box>
    );
};

export default ThumbnailItem;
