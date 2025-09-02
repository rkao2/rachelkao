import { Typography} from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedHeading = ({ text }) => (
    <motion.div
      animate={{ y: ["0%", "-2%", "0%"] }} // gentle floating
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 15 }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Nanum Pen Script", cursive',
          fontWeight: 700,
          mb: 3,
          fontSize: '3rem',
          display: 'inline-block',
          whiteSpace: 'pre-wrap', // preserve spaces
        }}
      >
        {text.split("").map((letter, i) => {
          if (letter === " ") return <span key={i}>&nbsp;</span>; // keep spaces
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3 + i * 0.05, type: "spring", stiffness: 100 }}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          );
        })}
      </Typography>
    </motion.div>
  );
  
export default AnimatedHeading;