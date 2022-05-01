import React from 'react'
import { TicketContext } from './../../Providers/TicketStateProvider'
import Message from './TicketComponents/Message'
import Status from './TicketComponents/Status'
import { Box, List, ListItem, Modal, Switch, Stack, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import { FixedSizeList } from 'react-window'

const styles = (theme) => ({
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '75%',
        backgroundColor: 'white',
        border: '0px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
        padding: 20,
    }
})

const TicketModal = (props) => {
    const { classes } = props
    const { status, setStatus, thread, setThread } = React.useContext(TicketContext);
    
    const renderRow = (props) => {
        const { index } = props;
        return (
            <ListItem key={index} component="div" disablePadding>
               <Message key={index} message={thread[index]} />
            </ListItem>
        );
    }
    return (
        <>
            <Modal
                {...props}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.box}>
                    <Status status={status} setStatus={setStatus}/>
                    {/* List of preious messages */}
                    <FixedSizeList
                        height={400}
                        width={360}
                        itemSize={46}
                        itemCount={thread?.length}
                        overscanCount={5}
                    >
                        {renderRow}
                    </FixedSizeList>
                    {/* New Comment */}

                </Box>
            </Modal>
        </>
    )
}

export default withStyles(styles)(TicketModal)