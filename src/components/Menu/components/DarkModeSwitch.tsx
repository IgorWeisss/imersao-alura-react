import * as Switch from '@radix-ui/react-switch';
import { Moon, Sun } from 'phosphor-react';
import { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

export function DarkModeSwitch () {

  const context = useContext(ThemeContext)

  return (
      <Switch.Root 
        className="relative bg-themeSwitcherBackground rounded-full min-w-[3rem] h-7 flex items-center" 
        onCheckedChange={(e) => {
          context.toggleMode()
        }}
      >
        <Moon className='absolute left-1' weight='fill' color='#ffcc00'/>
        <Sun className='absolute right-1' weight='fill' color='#ffcc00'/>
        <Switch.Thumb 
          className="SwitchThumb block transition-transform will-change-transform bg-themeSwitcherThumb 
          w-7 h-7 rounded-full box-border border border-textColorBase"
        />
      </Switch.Root>
  )
}