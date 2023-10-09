import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from "@mui/material/Stack"

import Spinner from "./Spinner"

const QuestionGroupSelector = ({isLoading, groups, onGroupSelected}) => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      { isLoading && <Spinner /> }
      <nav aria-label="main mailbox folders">
        <List>
        {groups.map(group =>
          <ListItem key={group.id} disablePadding>
            <ListItemButton onClick={() => onGroupSelected(group.id)}>
              <ListItemText primaryTypographyProps={{fontSize: '26px'}} primary={group.title} />
            </ListItemButton>
          </ListItem>
        )}
        </List>
      </nav>
    </Box>
  )
}

export default QuestionGroupSelector
