// Level	Meaning
// error	Application error that needs immediate attention
// warn	Warning that might cause future issues
// info	General information about app flow
// debug	Debugging information for developers
// trace	Very detailed, low-level logging


// npm install winston


const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const {createLogger,format,transports}=require('winston')
const {combine, timestamp,printf,colorize}= format;


const logFormat =printf(({level,message,timestamp})=>{
    return `${timestamp} [${level}] : ${message}`
})

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), 
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/app.log' })
  ],
});

logger.info('Application started');
logger.warn('Low memory');
logger.error('Database connection failed');



const level = process.env.NODE_ENV === 'production' ? 'warn' : 'debug';

const logger = createLogger({
  level,
  format: combine(timestamp(), logFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/combined.log' })
  ],
});



const {createLogger,format,transports} =require('winston')
const {printf,combine,timestamp,colorize} =format

const logFromat=printf((level,message,timestamp)=>{
    return `${timeStamp} [${level}] : ${message}`
})
