#!/bin/bash
echo `date`
#cpu use threshold
CPU_THRESHOLD='80'
 #mem idle threshold
MEMORY_THRESHOLD='100'
 #disk use threshold
DISK_THRESHOLD='90'
#---cpu
cpu_status () {
cpu_idle=`top -b -n 1 | grep Cpu | awk '{print $8}'|cut -f 1 -d "."`
cpu_usage=`expr 100 - $cpu_idle`
 echo "cpu utilization: $cpu_usage"
if [ $cpu_usage -gt $CPU_THRESHOLD ]
    then
        echo "CPU warning!!!"
    else
        echo "CPU ok!!!"
fi
}
#---mem
memory_status () {
 #MB units
mem_free=`free -m | grep "Mem" | awk '{print $4+$6}'`
 echo "memory space remaining : $mem_free MB"
if [ $mem_free -lt $MEMORY_THRESHOLD  ]
    then
        echo "memory warning!!!"
    else
        echo "memory ok!!!"
fi
}
#---disk
disk_status () {
disk_usage=`df -P | grep /dev | grep -v -E '(tmp|boot)' | awk '{print $5}' | cut -f 1 -d "%"`
 echo "disk usage : $disk_usage" 
if [ $disk_usage -gt $DISK_THRESHOLD ]
    then
        echo "disk warning!!!"
    else
        echo "disk ok!!!"
fi
 
 
}
cpu_status
memory_status
disk_status