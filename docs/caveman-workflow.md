# Caveman Workflow

Atomic commit workflow for OMP.

## Philosophy

- One purpose per commit
- One bugfix per commit
- One feature per commit
- One refactor per commit
- No mixed intent commits

The workflow is split into three skills.

## Skills

### caveman-plan

Analyze git changes and split them into logical commits.

Invoke:

```text
/skill:caveman-plan
Analyze current git diff.
```

Output:

- Commit plan
- File grouping
- Suggested commit titles

---

### caveman-review

Review a commit plan before committing.

Invoke:

```text
/skill:caveman-review
Review the proposed commit structure.
```

Output:

- Risks
- Mixed concerns
- Suggested improvements

---

### caveman-commit

Generate Conventional Commit messages.

Invoke:

```text
/skill:caveman-commit
Generate commit message for commit #1.
```

Output:

- Final commit message

## Recommended Workflow

```text
git diff
    ↓
caveman-plan
    ↓
caveman-review
    ↓
caveman-commit
    ↓
git commit
```

## Notes

- caveman-plan focuses on commit structure.
- caveman-review focuses on correctness.
- caveman-commit focuses on wording.
- Skills do not select models.
- Model selection is controlled by OMP modelRoles.
