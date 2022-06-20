
import React, { forwardRef } from 'react'
import  Icon from '../../@UI/Icon';
import IconButton from '../../@UI/IconButton'
import Panel from '../../@UI/Panel';
import { useTheme } from '../../../themes/UpshotUI'
import {useEffect, useRef, useState} from 'react';
import {usePopper} from 'react-popper';

export interface AlertSettingsModalProps{
     children?: React.ReactNode 
}

 const AlertSettingsModal =  forwardRef( (
    {
        children
    }: AlertSettingsModalProps
 )  => {
    const { theme } = useTheme()
    const [open, setOpen] = useState(false);
    const openRefValue = useRef(open);   // to get the update open value in event listeners
    const elRef = useRef<HTMLButtonElement>(null);
    const popperRef = useRef<HTMLDivElement>(null);
    const { styles, attributes } = usePopper(
      elRef.current,
      popperRef.current,
      {
        placement: 'auto',
        modifiers: [
          {
            name: 'overflow',
            options: {
              preventOverflow: true
            }
          },
          {
            name: 'offset',
            options: {
              offset: [0,20]
            }
          }
        ]
      }
    )
  
    // detect if user click outise the popper close the popper
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (openRefValue.current && popperRef.current && !popperRef.current.contains(event.target) &&
           elRef.current && !elRef.current.contains(event.target)) {
           setOpen(false);
           openRefValue.current = false;
        }
      };

      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [  ]);
  
    return (
      <>
        <IconButton ref={elRef} onClick={() => {
            openRefValue.current = !open;
            setOpen(!open)
          }}>
          <Icon icon="alertOn"  color="white" size={32} />
        </IconButton>
        <div
          ref={popperRef}
          style={{
            ...styles.popper,
            ...{
              zIndex: theme.zIndex.nav + 3,
            },
          }}
          {...attributes.popper}
        >
          {open && (
                  <Panel
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 2,
                    maxWidth: '400px',
                    gap: 4,
                  }}
                  className="alertModal"
                  >

                  {children}
                  </Panel>
          )}
         
        </div>
      </>
    )
  })

  export default AlertSettingsModal;