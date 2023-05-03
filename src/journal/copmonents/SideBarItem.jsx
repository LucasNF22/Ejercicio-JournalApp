import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'

export const SideBarItem = ({ title='', body, id, imageUrls=[], date,  }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    },[ title ] );

    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageUrls }) )
    };


    return (
      <>
          <ListItem  sx={{ padding: 0 }}>
              <ListItemButton 
                  sx={{ padding: 1, ml: 1, mr: 1, mb: 0.5 }} 
                  onClick={ onClickNote }
              >

                  <ListItemIcon sx={{ minWidth: 35 }}>
                      <TurnedInNot sx={{ color: 'primary.main' }}/>
                  </ListItemIcon>

                  <Grid container flexDirection={'column'}>
                      <ListItemText primary={ newTitle } sx={{ mb: 0 }} />
                      <ListItemText secondary={ body } />
                  </Grid>

              </ListItemButton>
          </ListItem>
      </>
    )
}
