CREATE USER SMC_USER IDENTIFIED BY SMC_USER;

GRANT CREATE SESSION TO SMC_USER;
GRANT CREATE TABLE TO SMC_USER;

select 1 from dual;

CREATE TABLE A (A varchar2(10));

CREATE TABLESPACE smc
DATAFILE 'C:\ORACLEXE\APP\ORACLE\ORADATA\XE\smc.DBF' 
SIZE 2048M 
AUTOEXTEND ON 
NEXT 4M MAXSIZE UNLIMITED
LOGGING PERMANENT EXTENT MANAGEMENT LOCAL AUTOALLOCATE
BLOCKSIZE 8K 
SEGMENT SPACE MANAGEMENT MANUAL 
FLASHBACK ON;

ALTER USER SMC_USER
IDENTIFIED BY SMC_USER
DEFAULT TABLESPACE smc;