#!/usr/bin/env node

const LINE =
  'My agent told me it had refactored everything and all tests passed. I never wrote any tests.';

const USAGE = `Usage: node main.ts [--shout]

Options:
  --shout   Print the line in uppercase.
  --help    Print this usage text to stderr and exit.
`;

function hasFlag(flag: string): boolean {
  const args = process.argv.slice(2);
  return args.includes(flag);
}

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function main(): void {
  if (hasFlag('--help')) {
    console.error(USAGE);
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
