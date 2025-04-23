"use client";

import Angular from '../../assets/angular.svg';
import AWS from '../../assets/aws.svg';
import Docker from '../../assets/docker.svg';
import MongoDB from '../../assets/mongodb.svg';
import MySQL from '../../assets/mysql.svg';
import NestJs from '../../assets/nestjs.svg';
import Nextjs from '../../assets/next-js.svg';
import Postgres from '../../assets/postgresql.svg';
import Prisma from '../../assets/prisma.svg';
import RabbitMQ from '../../assets/rabbitmq.svg';
import ReactNative from '../../assets/reactnative.svg';
import VueJs from '../../assets/vuejs.svg';
import Technologies from '../Technologies/Technologies';

export default function Experiences() {
  return (
    <div id="#second-section" className="flex w-full">
      <div 
        className="
          w-full 
          h-24 
          bg-gradient-to-r from-pink to-light-orange
          overflow-x-hidden
        ">
        <div 
          className="
            absolute 
            -skew-y-2 
            w-full 
            h-20 
            whitespace-nowrap
            bg-bg-primary 
            dark:bg-bg-primary-dark
            shadow-2xl
            overflow-hidden
            transition-colors 
            duration-200
          ">
            <div 
              className="
                flex
                animate-marquee
                whitespace-nowrap
                aria-hidden
                gap-x-24
                dark:text-text-primary-dark
              "
            >       

              <Technologies 
                srcImage={NestJs} 
                techName='NestJs' 
                key={NestJs}
              />

              <Technologies 
                srcImage={VueJs} 
                techName='VueJs' 
                key={VueJs}
              />
              
              <Technologies 
                srcImage={Angular} 
                techName='Angular' 
                key={Angular}
              />

              <Technologies 
                srcImage={Docker} 
                techName='Docker' 
                key={Docker}
              />

              <Technologies 
                srcImage={AWS} 
                techName='AWS' 
                key={AWS}
              />

              <Technologies 
                srcImage={ReactNative} 
                techName='React Native' 
                key={ReactNative}
              />

              <Technologies 
                srcImage={Prisma} 
                techName='Prisma' 
                key={Prisma}
              />

              <Technologies 
                srcImage={RabbitMQ} 
                techName='RabbitMQ' 
                key={RabbitMQ}
              />

              <Technologies 
                srcImage={Postgres} 
                techName='Postgres' 
                key={Postgres}
              />

              <Technologies 
                srcImage={MySQL} 
                techName='MySQL' 
                key={MySQL}
              />

              <Technologies 
                srcImage={Nextjs} 
                techName='Nextjs' 
                key={Nextjs}
              />

              <Technologies 
                srcImage={MongoDB} 
                techName='MongoDB' 
                key={MongoDB}
              />
            </div>
        </div>
      </div>
    </div>
  );
}
