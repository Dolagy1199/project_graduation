import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MediaCard() {
    return (

        <div className="newcard" >

            <Box sx={{ flexGrow: 1 }} paddingTop={5} paddingBottom={10}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography fontSize={23} fontWeight="bold">Andrew Work At Google</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    From  :
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    To:
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                            </CardContent>

                        </Card>

                    </Grid>

                    <Grid item xs={4}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography fontSize={23} fontWeight="bold">Andrew Work At Google</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    From  :
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    To:
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={4}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography fontSize={23} fontWeight="bold">Andrew Work At Google</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    From  :
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    To:
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1 }} paddingTop={5} paddingBottom={10}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography fontSize={23} fontWeight="bold">Andrew Work At Google</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    From  :
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    To:
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                            </CardContent>

                        </Card>

                    </Grid>

                    <Grid item xs={4}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography fontSize={23} fontWeight="bold">Andrew Work At Google</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    From  :
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    To:
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={4}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography fontSize={23} fontWeight="bold">Andrew Work At Google</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    From  :
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    To:
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1 }} paddingTop={5} paddingBottom={10}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography fontSize={23} fontWeight="bold">Andrew Work At Google</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    From  :
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    To:
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                            </CardContent>

                        </Card>

                    </Grid>

                    <Grid item xs={4}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography fontSize={23} fontWeight="bold">Andrew Work At Google</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    From  :
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    To:
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={4}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography fontSize={23} fontWeight="bold">Andrew Work At Google</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    From  :
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    To:
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        {new Date().toLocaleString()}
                                    </Typography>
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </div>




    );
}



















