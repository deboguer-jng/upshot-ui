// import {Icon,IconButton,Panel, useTheme} from '../../@UI';
import React, { forwardRef } from 'react'
import  Icon from '../../@UI/Icon';
import IconButton from '../../@UI/IconButton'

import Panel from '../../@UI/Panel';
// import { useTheme } from '@emotion/react'
import { useTheme } from '../../../themes/UpshotUI'

// import Image from "next/image"
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
  
    useEffect(() => {
      document.addEventListener(
        'click',
        (e) => {
          console.log();
          if ((e.target as HTMLDivElement).classList.contains('popperButton'))
            return
        }
      )
    },[])
  
    // console.log(open, 'open');
    return (
      <>
        <IconButton ref={elRef} onClick={() => setOpen(!open)}>
          <Icon icon="bellAlert" />
          {/* <Image src='/img/arch.svg' width={20} height={20}  alt="alert icon" /> */}
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