/* eslint-disable react/jsx-key */
import React from 'react';
import BlockList from '../index';
import OverlayWrapper from '../../OverlayWrapper/index';
import Button from '../../Button';
import EllipsisIcon from '../../Icon/EllipsisIcon';

export default [
  {
    examples: [
      <BlockList>
        <BlockList.Category header="Recent Pages">
          <BlockList.Item onClick={ function() {} }>
            Home
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Shopping Cart
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Order Confirmation
          </BlockList.Item>
        </BlockList.Category>
      </BlockList>,
    ],
  },
  {
    examples: [
      <BlockList>
        <BlockList.Category
          header={ (
            <div className="flex">
              <div className="flex--1">
                Attic &amp; Button
              </div>
              <div>
                <a href="https://www.example.com/">
                  https://www.example.com/
                </a>
              </div>
            </div>
        ) }>
          <BlockList.Item onClick={ function() {} }>
            Home
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Shopping Cart
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Order Confirmation
          </BlockList.Item>
        </BlockList.Category>
      </BlockList>,
    ],
  },
  {
    examples: [
      <BlockList>
        <BlockList.Category>
          <BlockList.Item
            onClick={ function() {
              console.log('`onClick` Example'); // eslint-disable-line no-console
            } }>
            onClick Example
          </BlockList.Item>
        </BlockList.Category>
        <BlockList.Category>
          <BlockList.Item
            href="https://www.optimizely.com/"
            hrefTarget="_blank">
            href Example
          </BlockList.Item>
        </BlockList.Category>
        <BlockList.Category>
          <BlockList.Item onClick={ function() {} }>
            <div className="flex flex-align--center">
              <div className="flex--1">
                <div>Complex Item</div>
                <div className="muted micro">
                  This is the item description.
                </div>
              </div>
              <Button size="small" style="outline">
                Inner Button
              </Button>
            </div>
          </BlockList.Item>
        </BlockList.Category>
        <BlockList.Category>
          <BlockList.Item>
            Plain Text Example
          </BlockList.Item>
        </BlockList.Category>
      </BlockList>,
    ],
  },
  {
    examples: [
      <BlockList>
        <BlockList.Category>
          <BlockList.Item onClick={ function() {} }>
            Archive
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Pause
          </BlockList.Item>
        </BlockList.Category>
        <BlockList.Item onClick={ function() {} }>
          View Results
        </BlockList.Item>
      </BlockList>,
    ],
  },
  {
    examples: [
      <BlockList hasBorder={ false }>
        <BlockList.Category>
          <BlockList.Item onClick={ function() {} }>
            Archive
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Pause
          </BlockList.Item>
        </BlockList.Category>
        <BlockList.Item onClick={ function() {} }>
          View Results
        </BlockList.Item>
      </BlockList>,
    ],
  },
  {
    examples: [
      <OverlayWrapper
        overlay={ <BlockList>
          <BlockList.Item onClick={ function() {} }>
              Archive
            </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
              Pause
            </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
              View Results
            </BlockList.Item>
        </BlockList> }
        horizontalAttachment="left"
        horizontalTargetAttachment="left"
        verticalAttachment="top"
        verticalTargetAttachment="bottom">
        <Button style="unstyled">
          <EllipsisIcon size={ 16 } />
        </Button>
      </OverlayWrapper>,
    ],
  },
  {
    examples: [
      <BlockList>
        <BlockList.Category header="Recent Pages">
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque lectus nulla, placerat at semper in, bibendum in
            lorem. Aenean rhoncus ac lectus et rutrum. Sed et arcu sit amet leo
            maximus facilisis quis non augue. Nullam enim sem, hendrerit id
            sapien ac, rhoncus hendrerit tortor. Proin id elit elementum,
            iaculis est vitae, ullamcorper neque. Proin efficitur porttitor
            nunc quis suscipit. Maecenas odio elit, varius et aliquam ac.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            https://wwww.example.com/path1/path2/path3/path4/path5/superlongvaluethatdoesntfitintheblocklistwhenitgetsveryveryveryveryveryveryveryveryverylong
          </BlockList.Item>
        </BlockList.Category>
      </BlockList>,
    ],
  },
  {
    examples: [
      <BlockList maxHeight={ '150px' }>
        <BlockList.Category header="BlockList with Scroll">
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
          <BlockList.Item onClick={ function() {} }>
            Lorem ipsum dolor sit amet.
          </BlockList.Item>
        </BlockList.Category>
      </BlockList>,
    ],
  },
];
