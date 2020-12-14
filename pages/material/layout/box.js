import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import MobileLayout from '../../../layout/Mobile'

const BoxScreen = () => (
  <>
    <MobileLayout title="Box">
      <h4>1. Base</h4>
      <Box component="span" m={1} color="text.success">
        <Button>Button base</Button>
      </Box>
      <h4>2. clone</h4>
      <Box m={1} color="text.primary" clone>
        <Button>Button clone</Button>
      </Box>
      <h4>3. render props</h4>
      <Box component="span" m={1} color="text.success">
        {props => <Button {...props}>Button render props</Button>}
      </Box>
    </MobileLayout>
  </>
)

export default BoxScreen
