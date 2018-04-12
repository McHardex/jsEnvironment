import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';
import faker from "faker";

jsf.extend("faker", function() {
    return faker
});
const outputFile = '../jsEnvironment/src/api/db.json';

/* eslint-disable no-console */
jsf.resolve(schema).then(function(result) {
    fs.writeFile(outputFile, JSON.stringify(result, null, 2), function(err) {
        if (err) {
            return console.log(chalk.red(err));
        } else {
            console.log(chalk.green('mock data generated.'));
        }
    });
});