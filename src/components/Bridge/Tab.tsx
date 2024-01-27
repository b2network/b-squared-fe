import { Box, Button, ButtonGroup } from "@mui/material";

type Iprops = {
  val: string,
  handleClick: (v: string) => void
}

const SELECTIONS = [
  {
    text: 'deposit',
    disabled: false
  }, {
    text: 'withdraw',
    disabled: true
  },
]

function Tab({ val, handleClick }: Iprops) {
  return <Box sx={{
    display: 'flex',
    color: '#000'
  }}>
    {
      SELECTIONS.map((item, index) => {
        const isActive = item.text === val;
        return <Box
          key={item.text}
          onClick={() => {
            if (item.disabled) return
            handleClick(item.text)
          }}
          sx={{
            flex: '1',
            textTransform: 'capitalize',
            background: isActive ? '#fef9ed' : 'white',
            borderTopLeftRadius: index === 0 ? '12px' : '0',
            borderBottomLeftRadius: index === 0 ? '12px' : '0',
            borderBottomRightRadius: index === SELECTIONS.length - 1 ? '12px' : '0',
            borderTopRightRadius: index === SELECTIONS.length - 1 ? '12px' : '0',
            border: '1px solid #000',
            borderRight: index === 0 ? 'none' : '1px solid black',
            cursor: item.disabled ? 'not-allowed' : 'pointer',
            fontSize: '24px',
            fontWeight: isActive ? 600 : 400,
            minHeight: '62px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {
          item.text
          }
        </Box>
      }
      )
    }
  </Box>
}

export default Tab;
