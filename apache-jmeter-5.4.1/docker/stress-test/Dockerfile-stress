FROM justb4/jmeter:5.3
WORKDIR /opt/apache-jmeter-5.3
ENV JMETER_HOME /opt/apache-jmeter-5.3
ENV JMETER_BIN /opt/apache-jmeter-5.3/bin
ARG TZ="Asia/Hongkong"
RUN wget https://www.vinsguru.com/download/87/?_ga=2.174613410.100518573.1641182686-1294245800.1641182686 -P /opt/apache-jmeter-5.3/lib/ext
RUN unzip -o /opt/apache-jmeter-5.3/lib/ext/?_ga=2.174613410.100518573.1641182686-1294245800.1641182686 -d /opt/apache-jmeter-5.3/lib/ext
RUN rm /opt/apache-jmeter-5.3/lib/ext/?_ga=2.174613410.100518573.1641182686-1294245800.1641182686
RUN echo "jmeter.save.saveservice.output_format=xml" >> /opt/apache-jmeter-5.3/bin/user.properties
COPY /test /opt/apache-jmeter-5.3/bin
VOLUME /test /opt/apache-jmeter-5.3/bin
CMD ["-n","-t","/opt/apache-jmeter-5.3/bin/test/boc-stress-test.jmx","-j","jmeter.save.saveservice.output_format=xml","-l","/opt/apache-jmeter-5.3/bin/test/report/stress-jenkins.io.report.jtl"]