import { faHandHoldingHeart, faCopy } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Subtitle from '../../subtitle/subtitle'
import styles from './contribute.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import { Tooltip } from '@mui/material';

export default function Contribute() {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('44542522000190')
        setOpen(true);
    };

    return (
        <section id='contribua' className={styles.section}>
            <div className={styles.contribute}>
                <div className={styles.header}>
                    <Subtitle icon={faHandHoldingHeart}>Contribua</Subtitle>
                    <Tooltip
                        onClose={handleTooltipClose}
                        open={open}
                        title="Copiado!"
                        arrow
                        placement='top'
                        leaveDelay={200}
                    >
                        <span className={styles.copy} onClick={handleCopy}><FontAwesomeIcon icon={faCopy} className={styles.icon} />Copiar PIX - 44.542.522/0001-90</span>
                    </Tooltip>

                </div>
                <Image src="/images/contribute.png" alt="logo" width='1200' height='470' objectFit='contain' />
            </div>
        </section>
    )
}
