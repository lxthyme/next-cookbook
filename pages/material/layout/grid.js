import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import {
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  ButtonBase,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 140
    },
    control: {
      padding: theme.spacing(2)
    },
    paper2: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    paper3: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    }
  })
)

const GridScreen = props => {
  const [spacing, setSpacing] = React.useState(2)
  const cls = useStyles(props)

  const handleChange = (event) => {
    const spacing = Number(
      event.targe.value
    )
    console.log('spacing: ', spacing)
    setSpacing(spacing)
  };

  return (
    <>
      <h4>Spacing（间距）</h4>
      <Grid container className={cls.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map(t => (
              <Grid key={t} item>
                <Paper className={cls.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Paper className={cls.control}>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {Array.from({ length: 10 }, (_, idx) => idx + 1).map(t => (
                    <FormControlLabel
                      key={t}
                      value={t.toString()}
                      control={<Radio />}
                      label={t.toString()}
                    />
                  ))}
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <h4>Fluid grids（流式格网）</h4>
      <div className={cls.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={cls.paper2}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={cls.paper2}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={cls.paper2}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={cls.paper2}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={cls.paper2}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={cls.paper2}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={cls.paper2}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>

      <h4>有断点的栅格</h4>
      <div className={cls.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={cls.paper2}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={cls.paper2}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={cls.paper2}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper2}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper2}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper2}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper2}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>

      <h4>复杂的栅格</h4>
      <div className={cls.root}>
        <Paper className={cls.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={cls.image}>
                <img
                  className={cls.img}
                  alt="complex"
                  src="./../../../public/img/rescue/bg_03.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920*1080 · JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <style jsx>{''}</style>
    </>
  )
};
export default GridScreen
