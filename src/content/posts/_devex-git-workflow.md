# The DevEx `git` Workflow

Comfortable version control

> **Developer Experience**:
> DevEx for short: a movement centered around making all aspects of engineering work more comfortable.
> People build better software,
> and they do it faster when their work is more comfortable.

## Introduction

The DevEx workflow's comfort compared to others,
such as git flow, github flow, atlassian flow,
comes from three fundamental elements:

1. **Guarantees** it provides to eliminate surprising moments and tedious tasks.
2. Clearly defined **falsehoods** that one is prone to assume intuitively, but should not.
3. Calculated **tradeoffs** that we use to cut the cruft and focus on the core problem.

## How to use the DevEx workflow

Start out your project just committing to `master`,
anything goes in the infant stages of a project.
A nice guideline is to use it once at least one of the following is true:

- An outage or a major bug on production would make at least 5 people annoyed
- Two devs had to work together to untangle a large merge conflict for the 2nd time
- The code impacts a non-trivial revenue stream

### Adding new commits

To propose new commits, you branch off of the latest state of `master` with `git fetch origin && git checkout origin/master && git checkout -b`

## Element I: The Guarantees

- Every commit on `master` is always correct
- John is never surprised by the state of `john-<name>`
- Every commit on `john-<name>` looks like it would on `master`
- You can easily get multiple releases out in one hour
- Artifacts retain the branch name and commit SHA

## Element II: The Falsehoods

- `master`'s tip commit is not always on production deployed version
- not all of `master`'s commit are always on production
- `master` doesn't relate to deployments

## Element III: The Tradeoffs

Version control is commonly coupled with three concepts:

1. Code changes
2. Code reviews and approvals (in the form of merge events)
3. Deployments

Accessing information about the latter two make up only 20% of your work
— an example of the Pareto principle.
In the case of juniors, where better developer experience makes the most difference,
they manage deployments and approvals even less.

In line with the age-old mantra of doing one thing and doing it well,
we can design a workflow that limits what you can use version control for
to code changes only.

- Needs separate deployments concept and tracking
- Needs CI
- Doesn't support simultaneous release tracks
- Not keeping merge events
- Not feature flag native
