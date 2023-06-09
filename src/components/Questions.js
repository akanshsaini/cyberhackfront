import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import classes from './Questions.module.css';
import QuestionHeader from './QuestionHeader';
import QuestionBody from './QuestionBody';
import { CaretRightOutlined } from '@ant-design/icons';
import data from '../data';
import zip1 from '../zip_files/zip1.zip';
import zip2 from '../zip_files/zip2.zip';
import zip3 from '../zip_files/zip3.zip';
import zip4 from '../zip_files/zip4.zip';
import zip5 from '../zip_files/zip5.zip';
import zip6 from '../zip_files/zip6.zip';
import zip7 from '../zip_files/zip7.zip';
import zip8 from '../zip_files/zip8.zip';
import zipA from '../zip_files/zipA.zip';
import zipB from '../zip_files/zipB.zip';
import zipC from '../zip_files/zipC.zip';
import zipD from '../zip_files/zipD.zip';
import zipE from '../zip_files/zipE.zip';
import zipF from '../zip_files/zipF.zip';
import zipG from '../zip_files/zipG.zip';


const { Panel } = Collapse;

const Questions = (props) => {
  const zips = [zip1, zip2, zip3, zip4, zip5, zip6, zip7, zip8,zipA, zipB, zipC, zipD, zipE, zipF, zipG];

  return (
    <Collapse
      bordered={false}
      accordion
      className={classes.questions}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      activeKey={[props.uncollapsed]}
      expandIconPosition='right'
    >
      {data.map((d, i) => {
        return (
          <Panel
            header={
              <QuestionHeader
                sno={`${i + 1}`}
                title={d.title}
                points={d.points}
              />
            }
            key={`${i + 1}`}
            collapsible={props.collapsibles[i]}
            className={classes.question}
          >
            <QuestionBody
              id={i}
              title={d.question}
              hint={d.hint}
              zip={zips[i]}
            />
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default Questions;
