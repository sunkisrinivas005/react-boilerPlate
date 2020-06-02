import React from 'react';
import { Button } from '@material-ui/core'

export const GenricButton = () => {
    return(
        <div>
            <Button
              variant="contained"
              color= "red"
              type='primary'
              onClick={() => onClick}
              disabled = {disabled ? disabled : false}
            >
              {value}
            </Button>
            </div>
    )
}
